
import { test, expect } from "@playwright/experimental-ct-react";
import App1185 from "../example/App1185.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1185 />);
  await expect(component).toContainText("Learn React");
});
