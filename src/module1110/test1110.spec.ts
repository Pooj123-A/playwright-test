
import { test, expect } from "@playwright/experimental-ct-react";
import App1110 from "./App1110.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1110 />);
  await expect(component).toContainText("Learn React");
});
