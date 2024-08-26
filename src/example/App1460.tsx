
import { test, expect } from "@playwright/experimental-ct-react";
import App1460 from "./App1460.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1460 />);
  await expect(component).toContainText("Learn React");
});
