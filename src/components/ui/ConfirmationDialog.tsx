import { useEffect, useId, useRef, type ReactNode } from 'react';
import { Pressable } from './Pressable';
import { webStateTones, type WebStateTone } from './webStateTones';

interface ConfirmationDialogProps {
  title: string;
  description: ReactNode;
  confirmLabel: string;
  cancelLabel: string;
  tone?: WebStateTone;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmationDialog({
  title, description, confirmLabel, cancelLabel, tone = 'warning', onConfirm, onCancel,
}: ConfirmationDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cancelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Native dialog enters the top layer and keeps keyboard focus inside it.
    dialog.showModal();
    cancelRef.current?.querySelector('button')?.focus({ preventScroll: true });
    return () => dialog.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => { event.preventDefault(); onCancel(); }}
      className={`fixed inset-0 m-auto max-h-[80dvh] w-[calc(100%-40px)] max-w-[420px] space-y-3 overscroll-contain rounded-[20px] border-2 p-5 backdrop:bg-black/35 ${webStateTones[tone]}`}
    >
      <h2 id={titleId} className="text-base font-bold leading-6">{title}</h2>
      <div id={descriptionId} className="text-sm leading-[22px]">{description}</div>
      <Pressable variant="featured" size="lg" block onClick={onConfirm}>{confirmLabel}</Pressable>
      <div ref={cancelRef}>
        <Pressable variant="neutral" size="lg" block onClick={onCancel}>{cancelLabel}</Pressable>
      </div>
    </dialog>
  );
}
