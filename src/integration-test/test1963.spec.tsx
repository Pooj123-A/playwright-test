
import { test, expect } from "@playwright/experimental-ct-react";
import App1963 from "../example/App1963.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1963 />);
  await expect(component).toContainText("Learn React");
});
