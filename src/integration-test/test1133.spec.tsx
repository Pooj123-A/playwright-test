
import { test, expect } from "@playwright/experimental-ct-react";
import App1133 from "../example/App1133.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1133 />);
  await expect(component).toContainText("Learn React");
});
