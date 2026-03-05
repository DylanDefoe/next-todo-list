import AuthGuard from '../components/AuthGuard'

export default function MyLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>
}
