
import { test, expect } from "@playwright/experimental-ct-react";
import App1871 from "./App1871.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1871 />);
  await expect(component).toContainText("Learn React");
});
