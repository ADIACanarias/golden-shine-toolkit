
-- ============================================
-- 1. SERVICES TABLE
-- ============================================
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'Zap',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are viewable by everyone"
  ON public.services FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert services"
  ON public.services FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON public.services FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete services"
  ON public.services FOR DELETE TO authenticated USING (true);

-- ============================================
-- 2. TESTIMONIALS TABLE
-- ============================================
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  text TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Testimonials are viewable by everyone"
  ON public.testimonials FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON public.testimonials FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON public.testimonials FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON public.testimonials FOR DELETE TO authenticated USING (true);

-- ============================================
-- 3. FAQS TABLE
-- ============================================
CREATE TABLE public.faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  order_num INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "FAQs are viewable by everyone"
  ON public.faqs FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert faqs"
  ON public.faqs FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update faqs"
  ON public.faqs FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete faqs"
  ON public.faqs FOR DELETE TO authenticated USING (true);

-- ============================================
-- 4. LEADS TABLE
-- ============================================
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_interest TEXT,
  message TEXT,
  source TEXT NOT NULL DEFAULT 'web',
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON public.leads FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON public.leads FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON public.leads FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete leads"
  ON public.leads FOR DELETE TO authenticated USING (true);

-- ============================================
-- 5. CLIENTS TABLE
-- ============================================
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  mrr NUMERIC NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active',
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view clients"
  ON public.clients FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert clients"
  ON public.clients FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update clients"
  ON public.clients FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated users can delete clients"
  ON public.clients FOR DELETE TO authenticated USING (true);
