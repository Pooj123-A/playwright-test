
import { test, expect } from "@playwright/experimental-ct-react";
import App1721 from "../example/App1721.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1721 />);
  await expect(component).toContainText("Learn React");
});
