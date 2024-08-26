
import { test, expect } from "@playwright/experimental-ct-react";
import App1165 from "../example/App1165.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1165 />);
  await expect(component).toContainText("Learn React");
});
