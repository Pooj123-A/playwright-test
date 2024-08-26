
import { test, expect } from "@playwright/experimental-ct-react";
import App1111 from "../example/App1111.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1111 />);
  await expect(component).toContainText("Learn React");
});
