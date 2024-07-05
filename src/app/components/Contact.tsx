import { MotionDiv } from '../lib/motion'
import { EmailBtn } from './EmailBtn'
import { SectionContainer } from './SectionContainer'

export const Contact = () => {
  return (
    <SectionContainer id="contact" title="Contact">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <p className="max-w-2xl text-center text-lg">
          &quot;Don&apos;t hesitate to reach out if you have any questions or
          simply want to drop a friendly hello via email. I&apos;m always happy
          to connect!&quot;
        </p>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <EmailBtn />
        </MotionDiv>
      </MotionDiv>
    </SectionContainer>
  )
}
