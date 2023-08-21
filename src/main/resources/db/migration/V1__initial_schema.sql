CREATE TABLE IF NOT EXISTS public.system_user (
    id BIGSERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT,
    date_of_birth TIMESTAMP,
    company_location TEXT NOT NULL CHECK (company_location IN ('Nis', 'Beograd', 'Kragujevac')),
    job_title TEXT NOT NULL,
    seniority TEXT NOT NULL CHECK (seniority IN ('Junior','Medior','Senior')),
    phone_number TEXT,
    photo TEXT,
    role BOOLEAN,
    registered BOOLEAN DEFAULT 'f'
);

CREATE TABLE IF NOT EXISTS public.system_event (
    id BIGSERIAL PRIMARY KEY,
    type TEXT UNIQUE NOT NULL,
    min_users BIGINT DEFAULT 1,
    max_users BIGINT,
    location TEXT DEFAULT 'office',
    duration BIGINT
);

CREATE TABLE IF NOT EXISTS public.schedule (
    id BIGSERIAL PRIMARY KEY,
    id_user BIGINT,
    id_event BIGINT,
    date_and_time TIMESTAMP NOT NULL,
    accepted BOOLEAN,
    creator BOOLEAN NOT NULL,
    FOREIGN KEY(id_user) REFERENCES public.system_user(id),
    FOREIGN KEY(id_event) REFERENCES public.system_event(id),
    PRIMARY KEY(user_id, date_and_time)
);

CREATE TABLE IF NOT EXISTS public.verification_token (
    id BIGSERIAL,
    id_user BIGINT,
    token TEXT UNIQUE NOT NULL,
    expiry_date DATE,
    PRIMARY KEY (id_user, token)
);
