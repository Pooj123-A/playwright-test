
import { test, expect } from "@playwright/experimental-ct-react";
import App1529 from "../example/App1529.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1529 />);
  await expect(component).toContainText("Learn React");
});
