
import { test, expect } from "@playwright/experimental-ct-react";
import App1885 from "./App1885.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1885 />);
  await expect(component).toContainText("Learn React");
});
