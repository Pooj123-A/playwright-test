
import { test, expect } from "@playwright/experimental-ct-react";
import App1821 from "./App1821.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1821 />);
  await expect(component).toContainText("Learn React");
});
