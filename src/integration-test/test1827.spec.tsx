
import { test, expect } from "@playwright/experimental-ct-react";
import App1827 from "../example/App1827.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1827 />);
  await expect(component).toContainText("Learn React");
});
