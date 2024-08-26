
import { test, expect } from "@playwright/experimental-ct-react";
import App1361 from "../example/App1361.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1361 />);
  await expect(component).toContainText("Learn React");
});
