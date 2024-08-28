
import { test, expect } from "@playwright/experimental-ct-react";
import App1968 from "./App1968.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1968 />);
  await expect(component).toContainText("Learn React");
});
