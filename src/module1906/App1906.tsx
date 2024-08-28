
import { test, expect } from "@playwright/experimental-ct-react";
import App1906 from "./App1906.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1906 />);
  await expect(component).toContainText("Learn React");
});
