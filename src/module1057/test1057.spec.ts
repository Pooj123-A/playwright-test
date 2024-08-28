
import { test, expect } from "@playwright/experimental-ct-react";
import App1057 from "./App1057.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1057 />);
  await expect(component).toContainText("Learn React");
});
