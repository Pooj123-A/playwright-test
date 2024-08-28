
import { test, expect } from "@playwright/experimental-ct-react";
import App1536 from "./App1536.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1536 />);
  await expect(component).toContainText("Learn React");
});
