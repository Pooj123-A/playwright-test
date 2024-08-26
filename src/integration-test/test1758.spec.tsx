
import { test, expect } from "@playwright/experimental-ct-react";
import App1758 from "../example/App1758.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1758 />);
  await expect(component).toContainText("Learn React");
});
