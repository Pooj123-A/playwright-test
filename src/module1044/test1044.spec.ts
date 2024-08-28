
import { test, expect } from "@playwright/experimental-ct-react";
import App1044 from "./App1044.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1044 />);
  await expect(component).toContainText("Learn React");
});
