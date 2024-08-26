
import { test, expect } from "@playwright/experimental-ct-react";
import App1054 from "../example/App1054.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1054 />);
  await expect(component).toContainText("Learn React");
});
