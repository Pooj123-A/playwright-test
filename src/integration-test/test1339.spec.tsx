
import { test, expect } from "@playwright/experimental-ct-react";
import App1339 from "../example/App1339.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1339 />);
  await expect(component).toContainText("Learn React");
});
