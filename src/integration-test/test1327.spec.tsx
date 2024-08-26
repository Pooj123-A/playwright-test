
import { test, expect } from "@playwright/experimental-ct-react";
import App1327 from "../example/App1327.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1327 />);
  await expect(component).toContainText("Learn React");
});
