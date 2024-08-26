
import { test, expect } from "@playwright/experimental-ct-react";
import App1023 from "./App1023.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1023 />);
  await expect(component).toContainText("Learn React");
});
