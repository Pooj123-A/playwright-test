
import { test, expect } from "@playwright/experimental-ct-react";
import App1061 from "../example/App1061.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1061 />);
  await expect(component).toContainText("Learn React");
});
