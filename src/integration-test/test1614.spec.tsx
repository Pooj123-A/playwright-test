
import { test, expect } from "@playwright/experimental-ct-react";
import App1614 from "../example/App1614.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1614 />);
  await expect(component).toContainText("Learn React");
});
