declare module "@commercetools/sdk-auth" {
  type Fetch = (url: string, args?: any) => Promise<any>;

  export interface TokenInfo {
    refresh_token: string;
    access_token: string;
    expires_at: number;
    expires_in?: number;
    scope?: string;
    token_type?: string;
  }

  export interface AuthOptions {
    authType?: string;
    credentials: {
      clientId: string;
      clientSecret: string;
    };
    disableRefreshToken?: boolean;
    fetch?: Fetch;
    headers?: Record<string, string>[];
    host: string;
    projectKey?: string;
    scopes: string[];
    token?: string;
  }

  export interface UserAuthOptions {
    username: string;
    password: string;
  }

  class SdkAuth {
    public config: AuthOptions;
    public fetcher: Fetch;
    public ANONYMOUS_FLOW_URI: string;
    public BASE_AUTH_FLOW: string;
    public CUSTOMER_PASSWORD_FLOW_URI: string;
    public INTROSPECT_URI: string;

    public constructor(authOptions: AuthOptions);

    public anonymousFlow(
      anonymousId?: string,
      config?: AuthOptions
    ): Promise<TokenInfo>;

    public clientCredentialsFlow(config?: AuthOptions): Promise<TokenInfo>;

    public customerPasswordFlow(
      credentials: UserAuthOptions,
      config?: AuthOptions
    ): Promise<TokenInfo>;

    public refreshTokenFlow(
      token: string,
      config?: AuthOptions
    ): Promise<TokenInfo>;

    public introspectToken(
      token: string,
      config?: AuthOptions
    ): Promise<TokenInfo>;

    public customFlow(requestConfig: any): Promise<TokenInfo>;
  }

  export default SdkAuth;
}
