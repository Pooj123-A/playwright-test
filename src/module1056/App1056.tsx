
import { test, expect } from "@playwright/experimental-ct-react";
import App1056 from "./App1056.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1056 />);
  await expect(component).toContainText("Learn React");
});
