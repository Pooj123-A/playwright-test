
import { test, expect } from "@playwright/experimental-ct-react";
import App1606 from "./App1606.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1606 />);
  await expect(component).toContainText("Learn React");
});
