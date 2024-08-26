
import { test, expect } from "@playwright/experimental-ct-react";
import App1875 from "../example/App1875.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1875 />);
  await expect(component).toContainText("Learn React");
});
