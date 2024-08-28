
import { test, expect } from "@playwright/experimental-ct-react";
import App1372 from "./App1372.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1372 />);
  await expect(component).toContainText("Learn React");
});
