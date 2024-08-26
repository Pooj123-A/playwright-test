
import { test, expect } from "@playwright/experimental-ct-react";
import App1305 from "./App1305.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1305 />);
  await expect(component).toContainText("Learn React");
});
