
import { test, expect } from "@playwright/experimental-ct-react";
import App1539 from "./App1539.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1539 />);
  await expect(component).toContainText("Learn React");
});
