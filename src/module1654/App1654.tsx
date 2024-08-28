
import { test, expect } from "@playwright/experimental-ct-react";
import App1654 from "./App1654.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1654 />);
  await expect(component).toContainText("Learn React");
});
