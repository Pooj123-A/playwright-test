
import { test, expect } from "@playwright/experimental-ct-react";
import App1394 from "../example/App1394.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1394 />);
  await expect(component).toContainText("Learn React");
});
