CREATE TABLE IF NOT EXISTS public.reset_token (
    id BIGSERIAL,
    email TEXT UNIQUE NOT NULL,
    token TEXT UNIQUE NOT NULL,
    expiry_date DATE,
    PRIMARY KEY (email, token)
);