
import { test, expect } from "@playwright/experimental-ct-react";
import App1210 from "../example/App1210.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1210 />);
  await expect(component).toContainText("Learn React");
});
