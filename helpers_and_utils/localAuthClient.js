// Mock local auth system
const createAuthError = (message) => {
  const error = new Error(message);
  error.status = 401;
  return error;
};

const mockUsers = new Map();
let currentUser = null;

export const db = {
  auth: {
    isAuthenticated: async () => {
      return localStorage.getItem('auth_token') !== null;
    },
    me: async () => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        throw createAuthError('Not authenticated');
      }
      if (currentUser) {
        return currentUser;
      }
      // Return a mock user
      currentUser = {
        id: 'user_123',
        email: localStorage.getItem('user_email') || 'user@example.com',
        name: 'Demo User',
        role: 'user'
      };
      return currentUser;
    },
    loginViaEmailPassword: async (email, password) => {
      // Simulate login - accept any credentials for demo
      if (!email || !password) {
        throw createAuthError('Email and password required');
      }
      const token = 'mock_token_' + Date.now();
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_email', email);
      currentUser = {
        id: 'user_123',
        email: email,
        name: 'Demo User',
        role: 'user'
      };
      return currentUser;
    },
    loginWithProvider: async (provider, returnTo) => {
      // Simulate OAuth login - just redirect with a mock token
      const token = 'mock_oauth_token_' + Date.now();
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_email', 'oauth_user@example.com');
      window.location.href = returnTo || '/';
    },
    register: async ({ email, password }) => {
      if (!email || !password) {
        throw createAuthError('Email and password required');
      }
      if (mockUsers.has(email)) {
        throw createAuthError('User already exists');
      }
      mockUsers.set(email, { email, password });
      return { success: true };
    },
    verifyOtp: async ({ email, otpCode }) => {
      // Accept any 6-digit code for demo
      if (!otpCode || otpCode.length !== 6) {
        throw createAuthError('Invalid verification code');
      }
      const token = 'mock_verified_token_' + Date.now();
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_email', email);
      return { access_token: token };
    },
    resendOtp: async (email) => {
      // Simulate resending OTP
      return { success: true };
    },
    resetPasswordRequest: async (email) => {
      // Simulate password reset request
      return { success: true };
    },
    resetPassword: async ({ resetToken, newPassword }) => {
      // Simulate password reset
      return { success: true };
    },
    logout: (returnTo) => {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_email');
      currentUser = null;
      if (returnTo) {
        window.location.href = returnTo;
      }
    },
    redirectToLogin: (returnTo) => {
      const loginUrl = '/login';
      if (returnTo && returnTo !== '/') {
        window.location.href = loginUrl + '?returnTo=' + encodeURIComponent(returnTo);
      } else {
        window.location.href = loginUrl;
      }
    },
    setToken: (token) => {
      localStorage.setItem('auth_token', token);
    }
  },
  entities: new Proxy({}, {
    get: () => ({
      filter: async () => [],
      get: async () => null,
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({})
    })
  }),
  integrations: {
    Core: {
      UploadFile: async () => ({ file_url: '' })
    }
  }
};

export default db;