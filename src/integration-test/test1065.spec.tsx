
import { test, expect } from "@playwright/experimental-ct-react";
import App1065 from "../example/App1065.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1065 />);
  await expect(component).toContainText("Learn React");
});
