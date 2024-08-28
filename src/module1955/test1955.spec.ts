
import { test, expect } from "@playwright/experimental-ct-react";
import App1955 from "./App1955.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1955 />);
  await expect(component).toContainText("Learn React");
});
