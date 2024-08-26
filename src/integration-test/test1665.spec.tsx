
import { test, expect } from "@playwright/experimental-ct-react";
import App1665 from "../example/App1665.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1665 />);
  await expect(component).toContainText("Learn React");
});
