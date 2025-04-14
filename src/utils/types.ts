export interface Name {
  emoji: string,
  text: string
}

export interface Tag {
  text: string
  color: string
}

export interface Workflow {
  type: string
  name: Name
  tags: Tag[]
  last_updated: string
}

export interface AiropsAppExecution {
  id: number
  inputs: Record<string, unknown>
  output: Workflow[]
  runtime: number
  source: string
  status: string
  airops_app_id: number
  workspace_id: number
  user_id: number | null
  created_at: string
  updated_at: string
  airops_apps_version_id: number
  stream_channel_id: string | null
  error_message: string | null
  error_code: string | null
  feedback: string
  credits_used: number
  conversation_id: string | null
  uuid: string
  pub_sub_channel_id: string | null
  steps_executed_count: number
  last_completed_step_name: string
  anonymized_at: string | null
  statusCode: number
}

export interface ApiResponse {
  result: Workflow[]
  execution_id: number
  airops_app_execution: AiropsAppExecution
}
