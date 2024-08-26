
import { test, expect } from "@playwright/experimental-ct-react";
import App1026 from "../example/App1026.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1026 />);
  await expect(component).toContainText("Learn React");
});
