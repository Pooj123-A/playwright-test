
import { test, expect } from "@playwright/experimental-ct-react";
import App1159 from "./App1159.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1159 />);
  await expect(component).toContainText("Learn React");
});
