# Supabase Setup Guide

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Replace `your-project-id` and `your-anon-key` with the values from your Supabase project dashboard.

## Database Schema

### Challenges Table

```sql
CREATE TABLE challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID,
  challenge_type VARCHAR(255) NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE,
  status VARCHAR(255) DEFAULT 'active',
  streak INTEGER DEFAULT 0
);
```

### Quiz Results Table

```sql
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID,
  score INTEGER NOT NULL,
  answers JSONB
);
```

### Chatbot Conversations Table

```sql
CREATE TABLE chatbot_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID,
  messages JSONB
);
```

## Row Level Security (RLS) Policies

For enhanced security, set up RLS policies for each table:

### Challenges Table Policy

```sql
-- Enable RLS
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users
CREATE POLICY "Users can view their own challenges"
  ON challenges
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own challenges"
  ON challenges
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own challenges"
  ON challenges
  FOR UPDATE
  USING (auth.uid() = user_id);
```

### Quiz Results Table Policy

```sql
-- Enable RLS
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users
CREATE POLICY "Users can view their own quiz results"
  ON quiz_results
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quiz results"
  ON quiz_results
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### Chatbot Conversations Table Policy

```sql
-- Enable RLS
ALTER TABLE chatbot_conversations ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users
CREATE POLICY "Users can view their own conversations"
  ON chatbot_conversations
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own conversations"
  ON chatbot_conversations
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own conversations"
  ON chatbot_conversations
  FOR UPDATE
  USING (auth.uid() = user_id);
```
