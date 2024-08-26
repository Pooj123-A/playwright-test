
import { test, expect } from "@playwright/experimental-ct-react";
import App1879 from "../example/App1879.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1879 />);
  await expect(component).toContainText("Learn React");
});
