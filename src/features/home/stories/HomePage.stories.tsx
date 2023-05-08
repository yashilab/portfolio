import type { Meta, StoryObj } from '@storybook/react'
import HomePage from '../pages/HomePage'

const meta: Meta<typeof HomePage> = {
  title: 'features/home/pages/HomePage',
  component: HomePage,
}

export default meta
type Story = StoryObj<typeof HomePage>

export const Template: Story = {}
