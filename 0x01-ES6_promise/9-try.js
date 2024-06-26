export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result, 'Guardrail was processed');
  } catch (error) {
    queue.push(`Error: ${error.message}`, 'Guardrail was not processed');
  }

  return (queue);
}
