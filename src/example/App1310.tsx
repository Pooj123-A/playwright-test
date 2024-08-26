
import { test, expect } from "@playwright/experimental-ct-react";
import App1310 from "./App1310.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1310 />);
  await expect(component).toContainText("Learn React");
});
